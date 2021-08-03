import delivery from './delivery boy.png';
import './Description.css';
function Description() {

    const images = [delivery, delivery, delivery,];
    const description = ['Title Text', 'Title Text', 'Title Text',];

    return (
        <div className='container-fluid container-class bg-color'>

            <div className="row justify-content-between px-lg-5">
                {
                    images.map((x, index) => {
                        const text = description[index];
                        return (
                            <div className="col-12 col-md-4 text-center d-flex my-5">
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