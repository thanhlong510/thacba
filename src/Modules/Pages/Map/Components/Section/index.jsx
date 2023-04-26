import { Link, useParams } from "react-router-dom";
import { sectionInfor } from "../../Shared/data";
import Table from "../Table";
import bgrMap from "../../../../../Asset/Image/Group94.png"
function Section() {
    const params =useParams()

    

    return <div className="Section w-full h-full flex relative"
    style={{
        backgroundImage: `url(${bgrMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: " 100% 100%"
    }}
    >
        <Link > 
            <button className=" uppercase border-2 m-4 bg-red-600 rounded-full w-32  "> {params.section} </button>
        </Link>
        {sectionInfor.map(b=>{
              return  <Link to={"/map/"+params.section +b.link}  >
                    <button  className="border-2 m-4 bg-slate-50 rounded-full w-32">
                        {b.title}
                    </button>
                </Link>
        })}
        <Table></Table>
    </div>
}

export default Section;