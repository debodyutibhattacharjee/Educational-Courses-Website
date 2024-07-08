import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import {toast} from "react-toastify"
const Card = (props)=>{
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        // logic
        if(likedCourses.includes(course.id)){
            // pehle se like hua hai
            setLikedCourses((prev)=>prev.filter((cid)=>{return cid!==course.id}));
            toast.warning("Like Removed");
        }
        else{
            // pehle se like nhi hai
            // insert karo isko 
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                // non-empty pehle se
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return(
       <div className="w-[300px] bg-slate-900 bg-opacity-95 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}/>
                <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id)?
                       ( (<FcLike fontSize="1.5rem"/>)): (<FcLikePlaceholder fontSize="1.5rem"/>)
                    }
                    
                </button>
                </div>
            </div>
           

            <div className="p-4">
                <p className="text-white font-semibold text-lg loading-6">{course.title}</p>
                <p className="mt-2 text-white">{
                    course.description.length>100?
                    (course.description.substr(0,100))+"...":
                    (course.description)
                }</p>
                
            </div>
        </div>
    );
};

export default Card