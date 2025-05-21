
import Rin_Avatar from "./Rin_Avatar";
import { PROFILE_INFO } from "./constant/profile";

export default function Profile() {
    return (
        <>
        <div className="screen-line-after relative flex items-center p-4 md:border-x">
  <div className="shrink-0">
    <div className="relative z-1 mx-0.5 my-1">
      
    <Rin_Avatar
              className="size-20 rounded-full ring-1 ring-gray-100 dark:ring-gray-700  ring-offset-2 ring-offset-background sm:size-28 "
            />
    </div>
  </div>

  <div className="flex flex-1 flex-col">
    <div className="flex grow items-end pb-1 pl-4">
    <div className="line-clamp-1 font-mono text-xs text-muted-foreground mt-2 mb-1 sm:translate-y-1" style={{ transform: 'translateY(20px)' }}>
        {PROFILE_INFO.slogan}
      </div>
    </div>

    <div className="">
      <h1 className="flex items-center gap-x-2 pl-4 text-2xl font-black font-bold">
        {PROFILE_INFO.displayName}
      </h1>

      <div className="py-1 pl-4">
        <p className="text-sm !font-normal font-mono">
          {PROFILE_INFO.role}   </p>

                        </div>
                        
    </div>
  </div>
</div>
      
 </>
  )
}