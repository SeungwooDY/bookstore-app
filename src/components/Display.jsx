import '../App.css'

export default function Display({ visible, bookData }) {

    return (
        <>
            <div>
                {visible["fiction"] && (
                    <>
                        <h2>Fiction:</h2>
                        <ul>
                            {bookData["fiction"].map((book) => (
                                <li key={book.title}>
                                    {book.title}, {book.author} (${book.price})
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                
                {visible["non-fiction"] && (
                    <>
                        <h2>Non-Fiction:</h2>
                        <ul>
                            {bookData["non-fiction"].map((book) => (
                                <li key={book.title}>
                                    {book.title}, {book.author} (${book.price})
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                
                {visible["children"] && (
                    <>
                        <h2>Children:</h2>
                        <ul>
                            {bookData["children"].map((book) => (
                                <li key={book.title}>
                                    {book.title}, {book.author} (${book.price})
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    )
}