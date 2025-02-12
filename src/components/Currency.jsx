import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { 
  Container, 
  TextField, 
  Select, 
  MenuItem, 
  Button, 
  Box, 
  Typography,
  Paper,
  InputLabel,
  FormControl
} from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

let BaseUrl = "https://api.freecurrencyapi.com/v1/latest";
let ApiKey = "fca_live_Y6znZqfAADtwhnfCE3FCOJZQeWE5pWabcRH02Spq";

const currencies = [
  "USD", "EUR", "TRY", "JPY", "AUD", "BGN", "BRL", "CAD", "CHF", "CNY",
  "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK",
  "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK",
  "SGD", "THB", "ZAR"
];

function Currency() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [convertedAmount, setConvertedAmount] = useState('');

    const exchange = async () => {
        try {
            const response = await axios.get(`${BaseUrl}?apikey=${ApiKey}&base_currency=${fromCurrency}&currencies=${toCurrency}`)
            setConvertedAmount((response.data.data[toCurrency] * amount).toFixed(4));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <CurrencyExchangeIcon sx={{ fontSize: 30 }} />
                        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
                            Döviz Kuru Dönüştürücü
                        </Typography>
                    </Box>

                    <TextField
                        label="Miktar"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Kaynak Para Birimi</InputLabel>
                            <Select
                                value={fromCurrency}
                                label="Kaynak Para Birimi"
                                onChange={(e) => setFromCurrency(e.target.value)}
                            >
                                {currencies.map((currency) => (
                                    <MenuItem key={currency} value={currency}>
                                        {currency}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel>Hedef Para Birimi</InputLabel>
                            <Select
                                value={toCurrency}
                                label="Hedef Para Birimi"
                                onChange={(e) => setToCurrency(e.target.value)}
                            >
                                {currencies.map((currency) => (
                                    <MenuItem key={currency} value={currency}>
                                        {currency}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <TextField
                        label="Dönüştürülen Miktar"
                        type="number"
                        value={convertedAmount}
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                        variant="outlined"
                    />

                    <Button 
                        variant="contained" 
                        size="large"
                        onClick={exchange}
                        sx={{
                            bgcolor: 'primary.main',
                            '&:hover': {
                                bgcolor: 'primary.dark',
                            },
                        }}
                    >
                        Dönüştür
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Currency;