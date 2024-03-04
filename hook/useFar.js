import { API_KEY } from '@env'

export const fetchData = async () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': '6ced3ea667msh208002aadbef985p121b92jsne1ce62891f25',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    setIsLoading(true);

    try {
        const response = await axios.request(options);
        setData(response.data.data);
        console.log(response.data);
    } catch (error) {
        setError(error);
        alert("mistake dey")
        console.error(error);
    } finally {
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
      }, []);

      return { data, isLoading, error, refetch }  
  };
