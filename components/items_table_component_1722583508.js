/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722583508", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-pink-400 to-purple-600 relative">
        <div class="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg"></div>
        <div class="relative z-10">
            <h2 id="costs-title" class="text-2xl font-bold mb-5 text-white">Blockchain Analysis Tools</h2>
            <div id="costs-table-container" class="overflow-x-auto">
                <table id="costs-table" class="table-auto w-full text-sm bg-white/20 backdrop-blur-sm rounded-lg shadow-lg">
                    <thead id="costs-table-header" class="text-white">
                        <tr>
                            <th id="description-header" class="px-4 py-2">Description</th>
                            <th id="cost-header" scope="col" class="px-4 py-2">Cost</th>
                        </tr>
                    </thead>
                    <tbody id="costs-table-body">
                        <tr class="group hover:bg-white/30 transition-colors duration-200" id="costs-row-1">
                            <th scope="row" class="text-left font-normal px-4 py-3" id="costs-cell-description-1">
                                <div class="font-semibold mb-0.5 text-white" id="costs-link-1">
                                    <a class="hover:text-pink-200" href="details.html">
                                        Blockchain Data Parser
                                    </a>
                                </div>
                                <p class="text-purple-100" id="costs-description-1">Extract insights from raw blockchain data</p>
                            </th>
                            <td class="font-semibold text-right px-4 py-3 text-white" id="costs-cell-cost-1">
                                <a class="hover:text-pink-200" href="details.html">$99/month</a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white/30 transition-colors duration-200" id="costs-row-2">
                            <th scope="row" class="text-left font-normal px-4 py-3" id="costs-cell-description-2">
                                <div class="font-semibold mb-0.5 text-white" id="costs-link-2">
                                    <a class="hover:text-pink-200" href="details.html">
                                        Smart Contract Auditor
                                    </a>
                                </div>
                                <p class="text-purple-100" id="costs-description-2">Automatically verify smart contract security</p>
                            </th>
                            <td class="font-semibold text-right px-4 py-3 text-white" id="costs-cell-cost-2">
                                <a class="hover:text-pink-200" href="details.html">$149/month</a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white/30 transition-colors duration-200" id="costs-row-3">
                            <th scope="row" class="text-left font-normal px-4 py-3" id="costs-cell-description-3">
                                <div class="font-semibold mb-0.5 text-white" id="costs-link-3">
                                    <a class="hover:text-pink-200" href="details.html">On-Chain Analytics Suite</a>
                                </div>
                                <p class="text-purple-100" id="costs-description-3">Visualize on-chain metrics and trends</p>
                            </th>
                            <td class="font-semibold text-right px-4 py-3 text-white" id="costs-cell-cost-3">
                                <a class="hover:text-pink-200" href="details.html">$199/month</a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white/30 transition-colors duration-200" id="costs-row-4">
                            <th scope="row" class="text-left font-normal px-4 py-3" id="costs-cell-description-4">
                                <div class="font-semibold mb-0.5 text-white" id="costs-link-4">
                                    <a class="hover:text-pink-200" href="details.html">Decentralized App Monitor</a>
                                </div>
                                <p class="text-purple-100" id="costs-description-4">Monitor dapp usage, transactions, and issues</p>
                            </th>
                            <td class="font-semibold text-right px-4 py-3 text-white" id="costs-cell-cost-4">
                                <a class="hover:text-pink-200" href="details.html">$249/month</a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white/30 transition-colors duration-200" id="costs-row-5">
                            <th scope="row" class="text-left font-normal px-4 py-3" id="costs-cell-description-5">
                                <div class="font-semibold mb-0.5 text-white" id="costs-link-5">
                                    <a class="hover:text-pink-200" href="details.html">Crypto Wallet Tracker</a>
                                </div>
                                <p class="text-purple-100" id="costs-description-5">Track wallet balances across multiple chains</p>
                            </th>
                            <td class="font-semibold text-right px-4 py-3 text-white" id="costs-cell-cost-5">
                                <a class="hover:text-pink-200" href="details.html">$99/month</a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white/30 transition-colors duration-200" id="costs-row-6">
                            <th scope="row" class="text-left font-normal px-4 py-3" id="costs-cell-description-6">
                                <div class="font-semibold mb-0.5 text-white" id="costs-link-6">
                                    <a class="hover:text-pink-200" href="details.html">ICO Investigation Tool</a>
                                </div>
                                <p class="text-purple-100" id="costs-description-6">Investigate ICO code, investors, and distributions</p>
                            </th>
                            <td class="font-semibold text-right px-4 py-3 text-white" id="costs-cell-cost-6">
                                <a class="hover:text-pink-200" href="details.html">$299/month</a>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot id="costs-table-footer">
                        <tr>
                            <th id="total-description" scope="row" class="text-left font-normal px-4 py-3">
                                <p id="total-description-text" class="italic text-purple-200">TOTAL in USD</p>
                            </th>
                            <td id="total-cost" class="font-bold text-right text-xl px-4 py-3 text-white">$1094</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
