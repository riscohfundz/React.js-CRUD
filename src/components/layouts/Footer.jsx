
const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[red] text-white text-2xl p-8">
        <span>&copy; Main Gate School - {new Date().getFullYear()}</span>
    </div>
  )
}

export default Footer;