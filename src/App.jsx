import "./App.css"
export default function Visionary() {

    const photos = [
        {
            id: 1,
            photo: "/images/bg-images-1.jpg",
            title: "APPROACH",
            textColor: "black",
            shadowColor: "white"
        },
        {
            id: 2,
            photo: "/images/bg-images-2.jpg",
            title: "TECHNOLOGY",
            textColor: "black",
            shadowColor: "white"
        },
        {
            id: 3,
            photo: "/images/bg-images-3.jpg",
            title: "STORY",
            textColor: "black",
            shadowColor: "white"
        },
        {
            id: 4,
            photo: "/images/bg-images-4.jpg",
            title: "DESIGN TEAM",
            textColor: "white",
            shadowColor: "black"
        },
        {
            id: 5,
            photo: "/images/bg-images-5.jpg",
            title: "QUALITY",
            textColor: "black",
            shadowColor: "white"
        }

    ]

    return (
        <div className="template">
            {
                photos.map((ph, index) => {
                    return (
                        <section tabIndex={0} key={ph.id} >
                            <img src={ph.photo} alt="" />
                            <div className="title" style={{
                                "--text-color": ph.textColor,
                                "--shadow": "0px 0px 10px " + ph.shadowColor
                            }}>
                                OUR <br />{ph.title}
                            </div>
                        </section>
                    )
                })
            }
            <div className="logo">
                <img src="/images/v-logo.svg" alt="" />
                <span>visionary</span>
            </div>
            <div className="slogan">
                ELEVATING COMPORT <br />
                WITH EVERY CURVE
            </div>
            <button className="close-btn">X</button>
        </div >

    )
}