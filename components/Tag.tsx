type TagProps = {
  text: string | number
  classes?: string
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: any) => any
}
function Tag({text,classes,onClick}: TagProps) {
  return (
    <span onClick={onClick} className={`${classes} font-bold rounded-full bg-dark text-white px-5 py-[2px] dark:text-dark dark:bg-white cursor-pointer`}>{text}</span>
  )
}

export default Tag