import { PROFILE_INFO } from "./constant/profile";

export default function AboutContent() {
    return (
        <div className="text-sm leading-7 font-medium font-mono" style={{ transform: 'translateY(20px)' }}>
            {PROFILE_INFO.about}
        </div>
    )
}