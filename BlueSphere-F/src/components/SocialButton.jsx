const SocialButton = ({ href, label, color, icon }) => (
  <a
    href={href}
    target='_blank'
    className={`${color} text-white px-5 py-2 rounded-full flex items-center gap-2 shadow hover:shadow-lg hover:scale-105 transition font-semibold`}
  >
    {icon} {label}
  </a>
);

export default SocialButton;
