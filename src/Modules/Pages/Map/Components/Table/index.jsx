import { measureType } from "../../Shared/data";
import CheckIcon from '@mui/icons-material/Check';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import SwitchCameraIcon from '@mui/icons-material/SwitchCamera';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";

function Table () {

    const generate =(index)=>{
        switch(index){
            case +0:
                return (<InvertColorsIcon/>);
            case +1: 
                return (<VerticalAlignCenterIcon/>);
            case +2:
                return (<SwitchCameraIcon/>);
        }
    }
    return <div className="bg-gray-500 h-full w-1/3 absolute right-0 top-0">
            <Link to="/map">
                <button className="text-slate-50 text-3xl my-5 ml-8">
                   <ArrowBackIosIcon/> Quay lại 
                </button>
            </Link>
            <div className=" flex py-2">   
            {measureType.map((b,index)=>{
                
                return <button className=" w-1/3 rounded-full mx-2 text-blue-400 bg-slate-50">
                     {generate(index)}
                     {b.title} <CheckIcon/>

                 </button>
             
         })}
            </div>
            <div className="mt-5 px-2 text-black">
                <div className="flex">
                    <div className="flex items-start w-7 py-2 mx-0.5 mt-0.5 font-semibold bg-slate-50 "></div>
                    <div className="flex items-start w-4/12 py-2 mx-0.5 mt-0.5 font-semibold  bg-slate-50">Tên trạm đo</div>
                    <div className="flex items-start w-3/12 py-2 mx-0.5 mt-0.5 font-semibold bg-slate-50">Giá trị đo</div>
                    <div className="flex items-start w-4/12 py-2 mx-0.5 mt-0.5 font-semibold bg-slate-50">Thời điểm đo</div>
                </div>
                <div className="flex">
                    <div className="w-7 py-2 mx-0.5 mt-0.5 bg-slate-50 "><SwitchCameraIcon/></div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5  bg-slate-50">Tên trạm đo</div>
                    <div className="w-3/12 py-2 mx-0.5 mt-0.5 bg-slate-50">1</div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5 bg-slate-50">Thời điểm đo</div>
                </div>
                <div className="flex">
                    <div className="w-7 py-2 mx-0.5 mt-0.5 bg-slate-50 "><VerticalAlignCenterIcon/></div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5  bg-slate-50">Tên trạm đo</div>
                    <div className="w-3/12 py-2 mx-0.5 mt-0.5 bg-slate-50">2</div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5 bg-slate-50">Thời điểm đo</div>
                </div>
                <div className="flex">
                    <div className="w-7 py-2 mx-0.5 mt-0.5 bg-slate-50 "><VerticalAlignCenterIcon/></div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5  bg-slate-50">Tên trạm đo</div>
                    <div className="w-3/12 py-2 mx-0.5 mt-0.5 bg-slate-50">3</div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5 bg-slate-50">Thời điểm đo</div>
                </div>
                <div className="flex">
                    <div className="w-7 py-2 mx-0.5 mt-0.5 bg-slate-50 "><InvertColorsIcon/></div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5  bg-slate-50">Tên trạm đo</div>
                    <div className="w-3/12 py-2 mx-0.5 mt-0.5 bg-slate-50">4</div>
                    <div className="w-4/12 py-2 mx-0.5 mt-0.5 bg-slate-50">Thời điểm đo</div>
                </div>
                
               
            </div>
    </div>
}

export default Table ;