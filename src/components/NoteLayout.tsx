import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { Note } from '../types';

type Props = {
  notes: Note[],
}

export const NoteLayout: React.FC<Props> = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find(n => n.id == id);

  if (note === null) return <Navigate to="/" replace />;

  return <Outlet context={note} />
};
