export default function InfoCard({title,details}) {
  //basic destructuring
  // const title = props.title;
  // const details = props.details;


  //destructuring revisited
  // const {title, details} = props;


  //or use it directly as params as used 

  return (
    <div class="card">
      <div>
        <h3>{title}</h3>
        {details}
      </div>
    </div>
  );
}
