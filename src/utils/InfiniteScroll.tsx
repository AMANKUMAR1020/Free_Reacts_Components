// import InfiniteScroll from 'react-infinite-scroll-component';

// const InfiniteScroll = () => {
//     return (
//         <div>
//         <InfiniteScroll
//         dataLength={items.length}
//         next={fetchData}
//         hasMore={true} // Replace with a condition based on your data source
//         loader={<p>Loading...</p>}
//         endMessage={<p>No more data to load.</p>}
//         >
//         <ul>
//             {items.map(item => (
//             <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//         </InfiniteScroll>
//         {error && <p>Error: {error.message}</p>}
//     </div>
//     );
      
// };

// export default InfiniteScroll;









import React, { useState, useEffect } from 'react';
import InfiniteScrollComponent from 'react-infinite-scroll-component';

interface InfiniteScrollProps {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
}

const InfiniteScroll = () => {
    const [items, setItems] = useState<InfiniteScrollProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const limit = 5; // Set the limit of items to fetch

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${(page - 1) * limit}`);
            const data = await response.json();

            setItems(prevItems => [...prevItems, ...data.users]); 
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError('Failed to load data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch initial data
    }, []);

    return (
        <div>
            <InfiniteScrollComponent
                dataLength={items.length}
                next={fetchData}
                hasMore={items.length % limit === 0} // Check if there are more items to load
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
            >
                {items.map(item => (
                    <li key={item.id}>
                        <h2>{item.id}</h2>
                        <h2>{item.firstName}</h2>
                        <h3>{item.lastName}</h3>
                        <h5>{item.age}</h5>
                        <h5>{item.gender}</h5>
                    </li>
                ))}
            </InfiniteScrollComponent>
        
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default InfiniteScroll;



















// import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

// interface InfiniteScrollProps {
//     id: number;
//     firstName: string;
//     lastName: string;
//     age: number;
//     gender: string;
// }

// const InfiniteScroll = () => {
//     const [items, setItems] = useState<InfiniteScrollProps[]>([]);
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const [page, setPage] = useState<number>(1);
//     const limit = 5; // Set the limit of items to fetch

//     const fetchData = async () => {
//         setIsLoading(true);
//         setError(null);

//         try {
//             const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${(page - 1) * limit}`);
//             const data = await response.json();

//             setItems(prevItems => [...prevItems, ...data.users]); // Adjust this based on your API response structure
//             setPage(prevPage => prevPage + 1);
//         } catch (error) {
//             setError('Failed to load data');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleScroll = () => {
//         if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
//             return;
//         }
//         fetchData();
//     };

//     useEffect(() => {
//         fetchData(); // Fetch initial data
//         window.addEventListener('scroll', handleScroll);
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div>
//             <InfiniteScroll
//                 dataLength={items.length}
//                 next={fetchData}
//                 hasMore={true} // Replace with a condition based on your data source
//                 loader={<p>Loading...</p>}
//                 endMessage={<p>No more data to load.</p>}
//                 >
//                 {items.map(item => (
//                     <li key={item.id}>
//                         <h2>{item.id}</h2>
//                         <h2>{item.firstName}</h2>
//                         <h3>{item.lastName}</h3>
//                         <h5>{item.age}</h5>
//                         <h5>{item.gender}</h5>
//                     </li>
//                 ))}
//             </InfiniteScroll>
        
//             {isLoading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}
//         </div>
//     );
// };

// export default InfiniteScroll;
