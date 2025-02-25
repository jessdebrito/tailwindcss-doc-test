interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className="avatar___container flex flex-row items-center w-full">
      <div className="avatar__photo mr-20">
        <img
          src="./src/assets/photo.png"
          alt="Photo"
          className="rounded-full hover:scale-x-110 hover:scale-y-110 animation-delay: 999s; hover:animate-bg-gradient-to-r p-[6px] from- [#6EE7B7] via-[#B82F6] to-[#93333EA]"
        />
      </div>
      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
            <h1>{props.nickname}</h1>
        </div>
        <div className="text__name mt-3">
            <h2>{props.realname}</h2>
        </div>
      </div>
      <div className="text__follow">
        <button className="w-80 mt-5">Follow</button>
      </div>
    </div>
  );
}

export default Avatar;
