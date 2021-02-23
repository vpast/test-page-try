import {useRouter} from 'next/router'

const TestPage = () => {
  const router = useRouter();
  const {title} = router.query;

  return (
    <div>
      <p>I am {title} Test Page!</p>
    </div>
  )
}

export default TestPage