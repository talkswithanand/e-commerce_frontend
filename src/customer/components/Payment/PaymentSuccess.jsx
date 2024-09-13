import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useSearchParams } from "react-router-dom";
import { updatePayment } from "../../../State/Payment/Action";
import { getOrderById } from "../../../State/Order/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import { OrderTracker } from "../Order/OrderTracker";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();

  const [referenceId, setReferenceId] = useState();

  const [paymentStatus, setPaymentStatus] = useState();

  const orderId = useParams();

  const dispatch = useDispatch();
  const order = useSelector((store) => store);
  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_link_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = [orderId, paymentId];

    dispatch(getOrderById(orderId));

    dispatch(updatePayment(data));
  }, [orderId, paymentId]);

  return (
    <div className="px-2 1g:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle> Congratulation Your Order Get
          Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://
rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/
xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70"
                  alt=""
                />
                <div>
                  <p>{item.product.title}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
