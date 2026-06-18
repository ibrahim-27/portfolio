import ContactInfo from "./ContactInfo";
import ProfileHeader from "./ProfileHeader";

const PersonalInfoSection = () => {
    return (
        <div className="flex flex-col gap-6 w-[90%] mx-auto my-12">
            <ProfileHeader />
            <ContactInfo />
        </div>
    )
};

export default PersonalInfoSection;