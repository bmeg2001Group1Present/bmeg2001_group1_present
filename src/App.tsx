import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#3498db',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
});

interface Term {
  term: string;
  definition: string;
}

const terms: Term[] = [
  {
    term: "Alzheimer's Disease",
    definition: "a progressive brain disorder that slowly destroys memory and thinking skills, eventually leading to the inability to perform daily tasks."
  },
  {
    term: "Pathology-Enhanced",
    definition: "a training strategy where the AI model is taught using synthetic medical images in which diseased areas are intentionally emphasized"
  },
  {
    term: "Pulse Sequence Invariance",
    definition: "a consistent and reliable analysis of brain MRI scans, even when those scans have been acquired using different machine settings (e.g. T1-weighted vs T2-weighted vs FLAIR)."
  },
  {
    term: "beta-amyloid plaques",
    definition: "abnormal clumps of beta-amyloid protein that build up in the spaces between neurons in the brain, a key pathological hallmark of Alzheimer's disease."
  },
  {
    term: "Neurofibrillary tangles",
    definition: "intracellular, abnormal protein clumps, primarily of hyperphosphorylated tau protein, that disrupt neuron function"
  },
  {
    term: "Hippocampal Atrophy",
    definition: "the shrinkage of the hippocampus, a brain region vital for memory"
  },
  {
    term: "Posterior Cingulate Cortex Atrophy",
    definition: "the shrinkage of the posterior cingulate cortex, a brain region crucial for visual processing and memory"
  },
  {
    term: "Domain Shift Problem",
    definition: "when a model trained on data from a source domain performs poorly on a different but related target domain because their underlying data distributions differ."
  },
  {
    term: "Feature representation learning",
    definition: "a machine learning process where a system automatically discovers and learns effective ways to transform raw data into a more useful format (a representation) for a specific task"
  },
  {
    term: "Anomaly probability maps",
    definition: "visual representations that indicate the likelihood of an anomaly or pathology at each point in an image."
  },
  {
    term: "MP-RAGE",
    definition: " Magnetization-Prepared RApid Gradient Echo, a widely used 3D T1-weighted magnetic resonance imaging (MRI) technique known for producing high-resolution brain images quickly and with good tissue contrast."
  },
  {
    term: "T1-weighted",
    definition: "produces images where fat appears bright and water-based tissues appear dark"
  },
  {
    term: "T2-weighted",
    definition: "highlights tissues with high water content, causing fluids, edema, and many pathologies to appear bright, while fat appears bright and muscle appears gray"
  },
  {
    term: "FLAIR",
    definition: "an advanced MRI sequence that suppresses the signal from cerebrospinal fluid (CSF) to better highlight abnormalities in the brain and spinal cord."
  },
  {
    term: "Image Registration",
    definition: "the process of spatially aligning two or more images of the same scene, taken at different times, viewpoints, or using different sensors, to a common coordinate system."
  },
  {
    term: "Intensity normalization",
    definition: "a preprocessing technique used to standardize image intensity values"
  },
  {
    term: "Histogram Matching",
    definition: "an image processing technique that transforms an image's pixel intensity distribution (its histogram) to resemble that of a reference image or a specified target histogram."
  },
  {
    term: "Quantitative MRI",
    definition: "a technique that measures specific, objective physical properties of tissues"
  },
  {
    term: "Decoupling leakage",
    definition: "a flaw in an AI model where information about the brain's normal structure (anatomy) incorrectly influences or leaks into its identification of diseased tissue (pathology), and vice versa."
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Typography
          variant="subtitle2"
          sx={{
            position: 'fixed',
            top: 8,
            right: 8,
            color: '#2c3e50',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            fontSize: '0.9rem',
            zIndex: 1000
          }}
        >
          BMEG2001 Group1 Presentation
        </Typography>
        <Container maxWidth="md">
          <Box sx={{ 
            my: 6,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2c3e50 30%, #3498db 90%)',
            borderRadius: 3,
            p: 3,
            color: 'white',
            boxShadow: 3
          }}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                mb: 2
              }}
            >
              Take a look at some useful terms!
            </Typography>
          </Box>
          <List>
            {terms.map((term, index) => (
              <Paper 
                key={index} 
                elevation={2} 
                sx={{ 
                  mb: 3, 
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  }
                }}
              >
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography 
                        variant="h5" 
                        component="div" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: '#2c3e50',
                          mb: 1,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {term.term}
                      </Typography>
                    }
                    secondary={
                      <Typography 
                        variant="body1" 
                        component="div" 
                        sx={{ 
                          color: '#34495e',
                          lineHeight: 1.8,
                          fontSize: '1.1rem'
                        }}
                      >
                        {term.definition}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider sx={{ mx: 2 }} />
              </Paper>
            ))}
          </List>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;


