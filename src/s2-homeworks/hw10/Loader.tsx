import s from './Loader.module.css'

type LoaderPropsType = {
  className?: string
}
export const Loader = ({className}: LoaderPropsType) => <div className={className ? `${className} ${s.loader}` : s.loader}/>
