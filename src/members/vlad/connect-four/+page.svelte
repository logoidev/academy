<script lang="ts">
	import { Field, type FieldParams } from './Field';

	let params: FieldParams = {
		columns: 7,
		rows: 6,
		playerCount: 2,
		winLength: 4
	};
	let showParams = true;

	let field = new Field(params);
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

	const changeParams = (newParams: Partial<FieldParams>) => {
		params = Object.assign({}, params, newParams);
		field = new Field(params);
		refresh();
	};
</script>

<div class="flex flex-col justify-center items-center h-screen">
	<div class="text-xl">Connect 4</div>

	<div class="text-2xl my-4" style={`color: ${field.getPlayerColor(player)}`}>
		Player {player + 1}
	</div>

	<div class="wrapper flex justify-center items-center relative">
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

	<button class="mt-4" on:click={() => (showParams = !showParams)}>🔧</button>
	{#if showParams}
		<div>
			<p>
				<label for="columns">Columns:</label>
				<input
					name="columns"
					type="number"
					min="2"
					max="12"
					class="w-8"
					value={params.columns}
					on:change={(e) => changeParams({ columns: e.currentTarget.valueAsNumber })}
				/>
			</p>
			<p>
				<label for="rows">Rows:</label>
				<input
					name="rows"
					type="number"
					min="2"
					max="10"
					class="w-8"
					value={params.rows}
					on:change={(e) => changeParams({ rows: e.currentTarget.valueAsNumber })}
				/>
			</p>
			<p>
				<label for="players">Players:</label>
				<input
					name="players"
					type="number"
					min="1"
					max={Field.MAX_PLAYERS}
					class="w-8"
					value={params.playerCount}
					on:change={(e) => changeParams({ playerCount: e.currentTarget.valueAsNumber })}
				/>
			</p>
			<p>
				<label for="winLength">Winning length:</label>
				<input
					name="winLength"
					type="number"
					min="2"
					max="8"
					class="w-8"
					value={params.winLength}
					on:change={(e) => changeParams({ winLength: e.currentTarget.valueAsNumber })}
				/>
			</p>
		</div>
	{/if}

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
