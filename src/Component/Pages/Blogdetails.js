import {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Blogdetails = () => {
    const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const request = await fetch('http://localhost:8080/api/v1/blog/' + id);
      const data = await request.json();
      setTitle(data.title);
      setBody(data.body);
    };
    fetchBlogDetails();
  }, []);

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className='container '>
      <h1 className='text-center'>Blog Details</h1>
      <div class=' mt-5'>
        <div className='container bg-white'>{title}</div>
        <div className='container bg-white mt-5'>{body}</div>
      </div>
      <button
        onClick={goBackHandler}
        type='button'
        class='btn btn-secondary mt-3 w-100'
      >
        Go Back
      </button>
    </div>
  );
}

export default Blogdetails