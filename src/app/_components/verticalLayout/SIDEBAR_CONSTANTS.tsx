import {BsEnvelope, BsEnvelopeArrowDown, BsGear, BsHouseDoor, BsKanban} from "react-icons/bs";

export const SIDENAV_ITEMS:any =[
    {
        title:"Dashboard",
        path:'/',
        icon:<BsHouseDoor size={20}/>
    },
    {
        title:"Product",
        path:'/product',
        icon:<BsKanban size={20}/>,
        submenu:true,
        subMenuItems:[
            {
                title:'All',
                path:'/products'
            },
            {
                title:'New',
                path:'/products/new'
            }
        ]
    },
    {
        title:"Feedbacks",
        path:'/feedbacks',
        icon:<BsEnvelope size={20}/>
    },
    {
        title:"Account",
        path:'/account',
        icon:<BsGear size={20}/>
    },
    {
        title:"Emails",
        path:'/emails',
        icon:<BsEnvelopeArrowDown  size={20}/>
    }
]