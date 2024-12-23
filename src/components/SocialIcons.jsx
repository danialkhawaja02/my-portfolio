
export default function SocialIcons({ icon: Icon, link, type }) {
  return (
    <a href={link} className={`block border border-[#303033] rounded-[1rem] ${type ? "px-4 sm:px-7 p-4" : "p-2"}`}>
      {type ? <Icon size={72} />  : <Icon size={32} /> }
    </a>
  );
}
