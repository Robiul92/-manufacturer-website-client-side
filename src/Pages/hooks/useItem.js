import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const useItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(id);

    useEffect(() => {
        const url = `https://serene-harbor-07570.herokuapp.com/tool/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return [product];



    
};

export default useItem;