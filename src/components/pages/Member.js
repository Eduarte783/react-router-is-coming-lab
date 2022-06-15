import { useParams } from "react-router-dom";

const Member = (props) => {
  let { houseId, memberId } = useParams();
  const house = props.houses.find((house) => house.id.toString() === houseId);
  const member = house.people.find(
    (member) => member.id.toString() === memberId
  );

  return (
    <div className="page">
      <div className="header">
        <a href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix}`}>Wiki Link</a> 
        <h2>{member.name}</h2>
      </div>
      <div className="desc">{member.description}</div>
    </div>
  );
};

export default Member;
