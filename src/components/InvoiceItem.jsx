import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";

const InvoiceItem = (props) => {
  const { onItemizedItemEdit, currency, onRowDel, items, products } = props;

  const itemTable = items.map((item) => (
    <ItemRow
      key={item.itemId}
      item={item}
      onDelEvent={onRowDel}
      onItemizedItemEdit={onItemizedItemEdit}
      currency={currency}
      products={products}
    />
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
    </div>
  );
};

const ItemRow = (props) => {
  const { item, onDelEvent, onItemizedItemEdit, currency, products } = props;
  const product = products.find(p => p.id === item.productId);

  return (
    <tr>
      <td style={{ width: "100%" }}>
        <span>{product ? product.name : 'Unknown Product'}</span>
        <p>{product ? product.description : ''}</p>
      </td>
      <td style={{ minWidth: "70px" }}>
        <EditableField
          onItemizedItemEdit={(evt) => onItemizedItemEdit(evt, item.itemId)}
          cellData={{
            type: "number",
            name: "itemQuantity",
            min: 1,
            step: "1",
            value: item.itemQuantity,
            id: item.itemId,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <span>{currency}{product ? product.price : 'N/A'}</span>
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={() => onDelEvent(item)}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default InvoiceItem;