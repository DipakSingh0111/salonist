import React from "react";

type SidebarProps = {
  title?: string;
  imageUrl: string;
  imageAlt?: string;
  onImageErrorSrc?: string;
  details?: React.ReactNode;
  items?: any[];
  showCartItems?: boolean;
  onItemRemove?: (item: any) => void;
  totalAmount?: number;
  continueButtonHandler?: () => void;
};

const CommonSidebar: React.FC<SidebarProps> = ({
  title,
  imageUrl,
  imageAlt,
  onImageErrorSrc = "/images/profilePlaceHolder.png",
  details,
  items = [],
  showCartItems = false,
  onItemRemove,
  totalAmount = 0,
  continueButtonHandler,
}) => {
  return (
    <div className="col-md-4 col-12">
      <div className="appointment-info-sidebar booking-sidebar">
        {/* Header Section */}
        <div className="p-4 gradient-bg">
          <div className="user-info-booking">
            <div className="business_pic">
              <img
                src={imageUrl}
                alt={imageAlt || "Image"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = onImageErrorSrc;
                }}
              />
            </div>
            <div className="_info">
              {title && <h2 className="titleh2">{title}</h2>}
              {details && <ul className="details_add">{details}</ul>}
            </div>
          </div>
        </div>

        {/* Cart Items Section */}
        {showCartItems && (
          <>
            <div className="services_details p-4 border-top service-detail-booking">
              <div className="booking-data">
                {items.length === 0 ? (
                  <h2>No records</h2>
                ) : (
                  items.map((item, index) => (
                    <div key={index} className="service-item-selected">
                      <div className="serv grid_item">
                        <div className="service_selected">
                          <div className="serv-name dark">{item.name}</div>
                          <p className="light">{item.qs_time}</p>
                        </div>
                        <div className="dark r_col text16">${item.qs_price}</div>
                      </div>
                      {onItemRemove && (
                        <button
                          className="remove-item"
                          onClick={() => onItemRemove(item)}
                        >
                          <i className="fa fa-close"></i>
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Total Amount Section */}
            <div className="p-4 border-top">
              <div className="serv grid_item">
                <div className="dark text16">
                  <strong>Total</strong>
                </div>
                <div className="dark r_col text16">
                  <strong>${totalAmount}</strong>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Continue Button Section */}
        {continueButtonHandler && (
          <div className="p-4 pt-0">
            <button
              id="continueButton"
              className="button darkBtn full-btn button-large text-center justify-content-center text16"
              onClick={continueButtonHandler}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonSidebar;
