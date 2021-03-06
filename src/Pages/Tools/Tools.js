import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToolCatagore from './ToolCatagore/ToolCatagore';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://serene-harbor-07570.herokuapp.com/tool`)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center text-warning font-bold mt-4 mb-4'>Available Items</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tools.slice(-6).map(tool => <ToolCatagore
                        key={tool._id}
                        tool={tool}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;