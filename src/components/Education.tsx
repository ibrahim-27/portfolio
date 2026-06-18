import Card from "./ui/Card";
import Heading from "./ui/Heading";

const educationList = [
    {
        heading: "National University of Science and Technology (NUST)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGVvM45IlNUDAIATKQENMKSgSWxCc1wtVvw&s",
        subHeading: "Bachelor of Science in Computer Science",
        timeline: "2020 - 2024",
        description: [
            <span>Cumulative <strong>GPA: 3.42 out of 4.00</strong></span>,
            <span><strong>Final Year Project:</strong> Suspicious Behavior Detection using CCTV — Awarded <strong>3rd Position</strong> at the Department Industrial Open House for excellence in real-time computer vision modeling.</span>
        ]
    },
]

const Education = () => {
    return (
        <div>
            <Heading title="Education" />
            {educationList.map((education, index) => <Card key={index} {...education} />)}
        </div>
    )
}

export default Education;