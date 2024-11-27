import { useState } from "react";
import { useEffect } from 'react';
import { getAnswerByUserId } from '../../services/answersService';
import { getListTopic } from "../../services/topicService"
import { Link } from "react-router-dom";
import "./Answers.scss"

function Answers(){
    const [dataAnswers, setDataAnswer] = useState([]);
    useEffect(() =>{
        const fetchApi = async () => {
            const answersByUserId = await getAnswerByUserId();
            const topics = await getListTopic();

            // console.log(topics);
            // console.log(answersByUserId);
            
            let result = [];

            for(let i = 0; i < answersByUserId.length; i++){
                result.push({
                    // +item.id: ep item.id tu string - number
                    ...topics.find(item => +item.id === answersByUserId
                        [i].topicId),
                    ...answersByUserId[i]
                });
            }
            // console.log(result);
            setDataAnswer(result.reverse());
        }
        fetchApi();
    }, []);

    console.log(dataAnswers);


    return(
    <>
        <h2>Danh sách bài đã luyện tập</h2>

        {dataAnswers.length > 0 &&(
            <table className="answers-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên chủ đề</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataAnswers.map(item =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <Link to={"/result/" + item.id} className="btn-view-details">Xem chi tiết</Link>
                            </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        )}

    </>
    )
}
export default Answers;