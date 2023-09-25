import "./BannerTop.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import catWhite from "../../../public/image/catWhite.svg";
import recPink from "../../../public/image/RectanglePink.svg";
import recYellow from "../../../public/image/RectangleYellow.svg";

export default function BannerTopPage() {
    return (
        <div>
            <div className="d-flex flex-row justify-content-center align-items-center bgColor">
                <div className=" d-flex flex-column justify-content-center">
                    <div className="text-hero-bold">รักแมวของคุณได้ทุกวัน</div>
                    <div className="text-hero-bold">ไม่ว่าคุณจะอยู่ที่ไหน</div>
                    <div className="text-hero-regular">
                        เราคือพี่เลี้ยงแมวที่คุณไว้วางใจได้มากที่สุด
                    </div>
                    <a href="#" className="btn btn-primary fs-5">
                        จองบริการ
                    </a>
                </div>
                <div className="imgCat">
                    <Image
                        className="z-2 position-absolute"
                        width={400}
                        src={catWhite}
                        alt="Tuatueng"
                    />
                    <Image
                        className="z-1 position-absolute"
                        width={400}
                        src={recPink}
                        alt="Tuatueng"
                    />
                    <Image
                        className="z-n1 recYellow"
                        width={400}
                        src={recYellow}
                        alt="Tuatueng"
                    />
                </div>
            </div>
        </div>
    );
}