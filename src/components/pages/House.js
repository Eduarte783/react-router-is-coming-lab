import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function House(props) {
    let { id } = useParams()
    const house = props.houses.find(house => house.id.toString() === id)
    const members = house.people.map((member, index) => {
        return (
            <li key={`member-${index}`}>
                <Link to={`members/${member.id}`} >{member.name}</Link>
            </li>
        )
    })

    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                {members}
            </ul>
        </div>
    )
}
