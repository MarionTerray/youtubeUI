import { Data } from "../datas/VideoData"

export default function VideoContent() {
    return (
        <div className="VideoContent">
            <div className="miniature">
                <img src={Data.miniature}/>
            </div>
            <div className="information">
                    <div className="chaineIcon">
                        <img/>
                    </div>
                    <div className="infoAndStats">
                        <p>titre</p>
                        <p>nom de la chaine</p>
                        <p>views</p>
                        <p>-</p>
                        <p>posted</p>
                    </div>

            </div>
        </div>
    )
}