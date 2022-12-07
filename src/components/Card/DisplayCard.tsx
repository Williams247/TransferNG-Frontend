import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import StarFull from "./icons/StarFull";
import StarEmpty from "./icons/StarEmpty";
import "./styles.scss";

interface DisplayProps {
  imageUrl?: string;
  title?: string;
  amount?: string;
  star?: number;
  content?: string;
  noButton?: boolean;
  cardType?: string;
}

const DisplayCard = ({
  imageUrl,
  title,
  amount,
  star,
  content,
  noButton,
  cardType,
}: DisplayProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div>
      {cardType === "first-card" && (
        <div className="display-card w-full">
          {imageUrl && (
            <img
              className="w-full display-card-image"
              alt={title}
              src={imageUrl}
            />
          )}

          <div className="px-5 py-5">
            <div className="flex justify-between">
              <div>
                {title && <p className="product-name plus-jakarta">{title}</p>}

                {star && (
                  <div className="flex justify-between mt-2">
                    {Array.from(Array(star), (x, y) => (
                      <StarFull key={y} />
                    ))}
                    {Array.from(Array(5 - star), (x, y) => (
                      <StarEmpty key={y} />
                    ))}
                  </div>
                )}
              </div>
              {amount && (
                <div>
                  <p className="amount plus-jakarta mt-0.5">{amount}</p>
                </div>
              )}
            </div>
            {content && (
              <div className="mt-3">
                <p className="text-white plus-jarkata text-[15px]">{content}</p>
              </div>
            )}

            <div className="mt-5 w-full">
              {!noButton && (
                <Button
                  label="Add to Cart"
                  customedClasses="w-full py-4 mb-4 text-[13px]"
                  onClick={() => navigate("/shop/product")}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {cardType === "last-card" && (
        <div className="display-card">
          <div className="px-10 py-5">
            <div className="flex justify-between">
              <div>
                {title && (
                  <p className="product-name product-name-2 plus-jakarta">
                    {title}
                  </p>
                )}
                {star && (
                  <div className="flex justify-between mt-2">
                    {Array.from(Array(star), (x, y) => (
                      <StarFull key={y} />
                    ))}
                    {Array.from(Array(5 - star), (x, y) => (
                      <StarEmpty key={y} />
                    ))}
                  </div>
                )}
              </div>
            </div>
            {amount && (
              <div>
                <p className="amount amount-2 plus-jakarta mt-3">{amount}</p>
              </div>
            )}
            {content && (
              <div className="mt-3">
                <p className="text-white text-content plus-jarkata">
                  {content}
                </p>
              </div>
            )}

            <div className="mt-5 w-full">
              {!noButton && (
                <Button
                  label="Add to Cart"
                  customedClasses="w-full py-4 mb-3 mt-10"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayCard;
