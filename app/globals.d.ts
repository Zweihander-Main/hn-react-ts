interface HNItem {
	id: number;
	deleted?: boolean;
	type?: string;
	by?: string;
	time?: number;
	text?: string;
	dead?: boolean;
	parent?: number;
	poll?: number;
	kids?: Array<number>;
	url?: string;
	score?: number;
	title?: string;
	parts?: Array<number>;
	descendants?: number;
}

interface HNUser {
	id: string;
	created: number;
	karma: number;
	delay?: number;
	about?: string;
	submitted?: Array<number>;
}

type HNTypes = 'top' | 'new' | 'best' | 'ask' | 'show' | 'job';

interface AppState {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

