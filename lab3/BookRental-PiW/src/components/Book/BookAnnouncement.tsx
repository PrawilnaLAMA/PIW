import "./BookAnnouncement.css"
import userImg from '../../assets/images/user-img.png';
import bookImg from '../../assets/images/book-img.png';

interface BookProps {
    title: string;
    author: string;
    pages: number;
    cover: 'Miękka' | 'Twarda';
    price: number;
    description: string;
    onDelete: () => void; // Funkcja do obsługi usuwania książki
  }

const BookAnnouncement: React.FC<BookProps> = ({ title, author, pages, cover, price, description, onDelete }) => {
  return (
    <div className="book-announcement">
        <div className="announcement-user">
            <img src={userImg} className="announcement-user-img"/>
            <h3 className="announcement-user-name"> Jan Kowalski</h3>
        </div>
        <div className="announcement-content">
            <div className="announcement-info">
                <h1 className="announcement-title">{title}</h1>
                <h2 className="announcement-description">{description}</h2>
            </div>
            <div className="announcement-content-down">
                <div className="announcement-content-down-info">
                    <div className="announcement-book-cover">
                        <div className="announcement-book-cover-schem">Okładka: </div>
                        <div className="announcement-book-cover-var">{cover}</div>
                    </div>
                    <div className="announcement-book-author">
                        <div className="announcement-book-author-schem">Autor: </div>
                        <div className="announcement-book-author-var">{author}</div>
                    </div>
                    <div className="announcement-book-numpage">
                        <div className="announcement-book-numpage-schem">Ilość stron: </div>
                        <div className="announcement-book-numpage-var">{pages}</div>
                    </div>
                </div>  
                <div className="announcement-prize">
                    <span className="announcement-prize-number">{price}</span>
                    <span className="announcement-prize-currency">zł</span>
                </div>  
                <button className="announcement-button">Dodaj do koszyka</button>
                <button className="delete-button" onClick={onDelete}>Usuń</button>
            </div>
            
        </div>
        <div className="announcement-book-img-container">
            <img src={bookImg} className="announcement-book-img"/>
        </div>
    </div>
  );
}

export default BookAnnouncement;