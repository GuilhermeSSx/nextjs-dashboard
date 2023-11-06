import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >

      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      
      <p className="text-[44px]">Acme</p>

      <div
        className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
      />
    </div>
  );
}
