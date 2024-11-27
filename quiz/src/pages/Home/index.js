function Home(){
    return(
        <>
          <div class="home-container">
        <header class="home-header">
            <h1 class="home-title">Chào mừng đến với Quiz Trắc Nghiệm!</h1>
            <p class="home-description">
                Kiểm tra kiến thức của bạn về HTML, CSS, JavaScript, và ReactJS qua các bài kiểm tra thú vị.
            </p>
        </header>
        
        <section class="home-categories">
            <h2>Chọn chủ đề bạn muốn kiểm tra:</h2>
            <div class="category-list">
                <div class="category-card">
                    <h3>HTML</h3>
                    <p>Kiểm tra kiến thức cơ bản và nâng cao về HTML.</p>
                </div>
                <div class="category-card">
                    <h3>CSS</h3>
                    <p>Kiểm tra hiểu biết về kiểu dáng và bố cục web với CSS.</p>
                </div>
                <div class="category-card">
                    <h3>JavaScript</h3>
                    <p>Kiểm tra kỹ năng lập trình JavaScript của bạn.</p>
                </div>
                <div class="category-card">
                    <h3>ReactJS</h3>
                    <p>Đánh giá kiến thức của bạn về ReactJS và xây dựng ứng dụng web hiện đại.</p>
                </div>
            </div>
        </section>
    </div>
        </>
    )
}
export default Home;