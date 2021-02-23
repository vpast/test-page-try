import {useRouter} from 'next/router'
import { tests } from '../../data/tests';

const TestPage = () => {

  const test = props.test;
  const router = useRouter();
  const {title} = router.query;

  return (
    <div>
      <p>I am {test.title} Page!</p>
    </div>
  )
}

export default TestPage