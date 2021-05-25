import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

const mapStateToProps = (state) => {
  return { items: state.items } || [];
};

const TableView = (props) => {
  console.log("props.items", props.items);

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDragStart = (event, id) => {
    console.log("dragstart:", id);
    event.dataTransfer.setData("id", id);
  };
  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let items = props.items.filter((item) => {
      if (item.name === id) {
        item.category = cat;
      }
      return item;
    });
  };

  const d = new Date();
  const t = d.getTime();
  const tableItems = props.items || [];
  const tableItemsJSX = tableItems.map((item, index) => {
    return (
      <tr
        key={index}
        draggable
        onDragStart={(e) => onDragStart(e, t.name)}
        onDrop={(e) => onDrop(e, "wip")}
      >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.unusualHours}</td>
        <td>{item.manualHours}</td>
        <td>{item.hours}</td>
        <td>{item.totalHours}</td>
        <td>Drag</td>
      </tr>
    );
  });

  return (
    <Table
      striped
      bordered
      hover
      responsive
      className="droppable"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, "complete")}
    >
      <tbody>
        <tr>
          <th>ID</th>
          <th>Worker Name</th>
          <th>Unusual Hours</th>
          <th>Manual Hours</th>
          <th>Hours</th>
          <th>Total Hours</th>
          <th>Options</th>
        </tr>
        {tableItemsJSX}
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(TableView);
