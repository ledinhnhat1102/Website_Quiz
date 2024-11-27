import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListTopic } from '../../services/topicService';
import "./Topic.scss"
function Topic(){
    const [topics, setTopics] = useState([]);

    useEffect(() =>{
        const fetchApi = async () => {
            const response = await getListTopic();
            setTopics(response);
        }
        fetchApi();
    }, []);
    // console.log(topics);
    return(
        <>
        <h2>Danh sách chủ đề ôn luyện</h2>
        {topics.length > 0 &&(
            <table className="topics-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên chủ đề</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map(item =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <Link to={"/quiz/" + item.id}  className="btn-start">Làm bài</Link>
                            </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        )}
        </>
    )
}
export default Topic;