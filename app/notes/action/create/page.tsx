import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'NoteHub – Create Note',
    description: 'Create a new note with title, content and tag.',
    openGraph: {
        title: 'NoteHub – Create Note',
        description: 'Create a new note with title, content and tag.',
        url: 'https://08-zustand-3u212ijf9-igors-projects-2fd4204a.vercel.app/notes/action/create',
        images: [
            {
                url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                width: 1200,
                height: 630,
                alt: 'NoteHub',
            },
        ],
    },
};

export default function CreateNotePage() {
    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <NoteForm/>
            </div>
        </main>
    );
}