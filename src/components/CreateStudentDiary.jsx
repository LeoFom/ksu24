import "../styles/nppTable.scss"

function CreateStudentDiary() {

    return(
        <div className="create-body">
            <section className="main-information">
                <div className="information-header">
                    <h1>Основна інформація про щоденник</h1>
                    <div className="star"></div>
                </div>
                <div className="information-body">
                    <div className="body-element">
                        <h3 ></h3>
                        <input type="text" />
                    </div>
                </div>
            </section>
            <div className="work-name-body">
                <section className="work-name"></section>
                {/* Можно добавіть еще один и ее...  */}
                <section className="work-name"></section>
            </div>
            <section className="add-file"></section>
            <div className="button-block">
                <button></button>
            </div>
        </div>
    )
}

export default CreateStudentDiary