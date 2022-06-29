import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {

  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
  if(basePath){
    picture = basePath + "/" + picture;
  }

  return (
    <div className="flex items-center">
      <img src = { picture } className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
