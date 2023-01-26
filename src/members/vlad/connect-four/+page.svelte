<script lang="ts">
	import { Field } from './Field';

	// TODO: Make dynamic
	const columns = 7;
	const rows = 6;
	const playerCount = 2;
	const winLength = 4;

	const field = new Field(columns, rows, playerCount, winLength);
	let fieldCells = field.cells;
	let player = field.currentPlayer;
	let showWinner = false;
	let winner: null | number = null;

	const refresh = () => {
		fieldCells = field.cells;
		player = field.currentPlayer;
	};

	refresh();

	const checkWinner = () => {
		const win = field.checkWin();
		if (win) {
			winner = win.winner === undefined ? null : win.winner;
			showWinner = true;
		}
	};

	const onColumnClick = (columnIndex: number) => {
		field.placeAtColumn(columnIndex);
		refresh();
		checkWinner();
	};
</script>

<div class="flex flex-col justify-center items-center h-screen">
	<div class="text-xl">Connect 4</div>

	<div class="text-2xl my-4" style={`color: ${field.getPlayerColor(player)}`}>
		Player {player + 1}
	</div>

	<div class="wrapper flex justify-center items-center">
		{#each fieldCells as column, c}
			<button class="column" on:click={() => onColumnClick(c)}>
				{#each column as cell}
					<div class="cell">
						<div
							class={`disk ${cell.placed ? 'placed' : ''}`}
							style={`--hover: ${field.getPlayerColor()}; --placed: ${cell.color};`}
						/>
					</div>
				{/each}
			</button>
		{/each}
	</div>

	{#if showWinner}
		<div
			class="modal flex flex-col justify-center items-center"
			style={winner === null ? '' : `background: ${field.getPlayerColor(winner)}`}
		>
			<h4>
				{winner === null ? `It's a draw!` : `Player ${winner + 1} won!`}
			</h4>
			<button class="underline" on:click={() => window.location.reload()}>Restart?</button>
		</div>
	{/if}
</div>

<style>
	.wrapper {
		border-radius: 8px;
		overflow: hidden;
	}

	.column {
		border: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		cursor: pointer;
	}

	.column:hover .disk {
		opacity: 0.3;
		background: var(--hover);
	}

	.cell {
		width: 64px;
		height: 64px;
		border: 1px solid #0b2a79;
		background: radial-gradient(transparent 24px, #2a4da4 24px);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.disk {
		width: 46px;
		height: 46px;
		border-radius: 50%;
	}

	.placed {
		opacity: 1 !important;
		background: var(--placed) !important;
	}

	.modal {
		position: absolute;
		width: 360px;
		height: 200px;
		background: #e7e7e7;
		border: 1px solid black;
		border-radius: 8px;
	}
</style>
