import { useSelector } from "react-redux"

export default function User() {

  const username = useSelector(state=> state.user.username)
  console.log(username)

  if (!username) return null

  return (
    <div className="text-sm font-semibold hidden  md:block">{username}</div>
  )
}
