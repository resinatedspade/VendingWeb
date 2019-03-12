<!DOCTYPE html>

<!-- 
	Name: Andrew Darr
	Date Created: 13 Jan, 2019
	Most recent revision: 13 Jan, 2019
-->

<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="VendingCSS.css" />
    <script src="VendingJavaScript.js"></script>

    <title>Vending</title>

</head>


<body>


    <div id="vendingMachine" class="col-12">
        <h1>Vending Machine</h1>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-8" style="text-align:center">
                <div id="itemList" class="row">
                    <!-- vending items go here from java script -->
                </div>
            </div>

            <div id="vendingPurchase" class="col-sm-4" style="text-align:center">
                <div class="row">
                    <div class="offset-1 col-10">
                        <h3>Total $ In</h3>
                    </div>
                    <div class="row offset-1 col-10">
                        <label class="control-label" for="addedMoney"></label>
                        <input type="text" id="addedMoney" onchange="addMoney(total)" class="form-control"
                            placeholder="money" value="$0" name="addedMoney" readonly=true required=true />
                    </div>
                    <div class="row offset-1 col-10">
                        <div class="col-6">
                            <button id="dollar" onclick="addDollar()" type="submit" class="btn btn-default">
                                Dollar
                            </button>
                        </div>
                        <div class="col-6">
                            <button id="quarter" onclick="addQuarter()" type="submit" class="btn btn-default">
                                Quarter
                            </button>
                        </div>
                    </div>
                    <div class="row offset-1 col-10">
                        <div class="col-6">
                            <button id="dime" onclick="addDime()" type="submit" class="btn btn-default">
                                Dime
                            </button>
                        </div>
                        <div class="col-6">
                            <button id="nickel" onclick="addNickel()" type="submit" class="btn btn-default">
                                Nickel
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-1 col-10">
                            <h3>Messages</h3>
                        </div>
                        <div class="row offset-1 col-10">
                            <label class="control-label" for="message"></label>
                            <input type="text" id="message" onchange="messages(message)" class="form-control"
                                placeholder="Message" name="message" readonly />
                        </div>
                        <div class="row offset-1 col-10">
                            <label class="control-label" for="ItemId"></label>
                            <input type="number" id="itemId" value="" class="form-control" placeholder="Item ID"
                                name="ItemId" required=true />
                        </div>
                        <div class="offset-2 col-8">
                            <button id="makePurchase" onclick="MakePurchase()" type="submit" class="btn btn-default">
                                Make Purchase
                            </button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="offset-1 col-10">
                            <h3>Change</h3>
                        </div>
                        <div class="row offset-1 col-10">
                            <label class="control-label" for="change"></label>
                            <input id="change" type="text" class="form-control" placeholder="Change" name="change"
                                readonly />
                        </div>
                        <div class="offset-2 col-sm-8">
                            <button id="returnChange" onclick="returnChange()" type="submit"
                                class="btn btn-default">
                                Change Return
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="footers" class="row offset-1 col-10">

        </div>


        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>

        <script>
            $(document).ready(function () {
                loadItems();
            });
        </script>
</body>

</html>
