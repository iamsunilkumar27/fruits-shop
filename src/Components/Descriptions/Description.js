import delivery from './delivery boy.png';
function Description() {

    const images = [delivery, delivery, delivery,];
    const description = ['Title Text', 'Title Text', 'Title Text',];

    return (
        <div className='container container-class'>

            <div className="d-flex   flex-wrap justify-content-between px-lg-5">
                {
                    images.map((x, index) => {
                        const text = description[index];
                        return (
                            <div className="text-center d-flex my-md-5">
                                <div>
                                    <img className="rounded-circle bg-white p-3" src={x}></img>
                                </div>
                                <div className='d-flex flex-column  align-items-center'>
                                    <h5 className=" m-auto">
                                        {text}
                                    </h5>
                                    <p>
                                        Discription
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}
export default Description;