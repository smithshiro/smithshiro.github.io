type Props = {
  title: string
  skills: string[]
  tasks: string[]
  time: string
  isLatest?: boolean
}
const TimelineItem: React.FC<Props> = (data: Props) => {
  const {
    title,
    skills,
    tasks,
    time,
    isLatest = false
  } = data

  return (
    <li className="mb-10 ms-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
          {
            isLatest ? (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>
            ) : null
          }
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
        <div className="my-2">
          <p className="border-b">Tasks</p>
          <ul className="mb-2 text-sm text-gray-400">
            {
              tasks.map((task, index) => {
                return (<li key={index}>{task}</li>)
              })
            }
          </ul>
        </div>
        <div className="my-2">
          <p className="border-b">Skill Set</p>
          <ul className="flex flex-wrap gap-x-2 text-sm text-gray-400">
            {
              skills.map((skill, index) => {
                return (<li key={index}>{skill}</li>)
              })   
            }
          </ul>
        </div> 
    </li>
  )
}

export default TimelineItem
