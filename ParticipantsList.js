import React from 'react';
import './ParticipantsList.css';

const ParticipantsList = ({ participants, onShowMessage }) => {
    return (
        <div className="participants-container">
            <h1 className="title">Participants</h1>
            <ul className="participants-list">
                {participants.map((participant) => (
                    <li key={participant.id} className="participant-item">
                        <span className="participant-info">{participant.name} - {participant.email}</span>
                        <button
                            className="show-message-button"
                            onClick={() => onShowMessage(participant.name)}
                        >
                            Show Message
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ParticipantsList;