interface noteprops {
  params: {
    noteid: string;
  }
}
export default function Notes({ params }: noteprops) {
  return (
    <div>Note detail {params.noteid}</div>
  )
}
